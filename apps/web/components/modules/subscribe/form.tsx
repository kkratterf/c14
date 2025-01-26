'use client';

import type React from 'react';
import { useState } from 'react';

import { Button } from '@c14/design-system/components/ui/button';
import { Input } from '@c14/design-system/components/ui/input';

const INIT = 'INIT';
const SUBMITTING = 'SUBMITTING';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;
const formStyles = {
  id: 'cm3oa5uyr05lmkk91wz4oup3v',
  name: 'Default',
  userGroup: 'Newsletter',
};
const domain = 'app.loops.so';

const EMAIL_REGEX = /.+@.+/;

interface ApiResponse {
  message?: string;
  ok: boolean;
  statusText: string;
}

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [formState, setFormState] = useState<(typeof formStates)[number]>(INIT);
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setFormState(INIT);
    setErrorMessage('');
  };

  /**
   * Rate limit the number of submissions allowed
   * @returns {boolean} true if the form has been successfully submitted in the past minute
   */
  const hasRecentSubmission = () => {
    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem('loops-form-timestamp');

    // Indicate if the last sign up was less than a minute ago
    if (
      previousTimestamp &&
      Number(previousTimestamp) + 60 * 1000 > timestamp
    ) {
      setFormState(ERROR);
      setErrorMessage('Too many signups, please try again in a little while');
      return true;
    }

    localStorage.setItem('loops-form-timestamp', timestamp.toString());
    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission
    event.preventDefault();

    // boundary conditions for submission
    if (formState !== INIT) {
      return;
    }
    if (!isValidEmail(email)) {
      setFormState(ERROR);
      setErrorMessage('Please enter a valid email');
      return;
    }
    if (hasRecentSubmission()) {
      return;
    }
    setFormState(SUBMITTING);

    // build body
    const formBody = `userGroup=${encodeURIComponent(formStyles.userGroup)}&email=${encodeURIComponent(
      email
    )}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;

    // API request to add user to newsletter
    fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res: Response) => [res.ok, res.json(), res] as const)
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          resetForm();
          setFormState(SUCCESS);
        } else {
          dataPromise.then((data: ApiResponse) => {
            setFormState(ERROR);
            setErrorMessage(data.message || res.statusText);
            localStorage.setItem('loops-form-timestamp', '');
          });
        }
      })
      .catch((error) => {
        setFormState(ERROR);
        // check for cloudflare error
        if (error.message === 'Failed to fetch') {
          setErrorMessage(
            'Too many signups, please try again in a little while'
          );
        } else if (error.message) {
          setErrorMessage(error.message);
        }
        localStorage.setItem('loops-form-timestamp', '');
      });
  };

  switch (formState) {
    case SUCCESS:
      return (
        <div className='flex w-full flex-col gap-2 px-6 py-8 sm:px-8 sm:py-10'>
          <p className="font-brand text-lg">Yay, can you feel the joy?</p>
          <p className="text-description text-sm">
            You&apos;ve just joined <b>C14</b> newsletter.
          </p>
          <p className="text-description text-sm">
            Make sure you&apos;ve received our <b>welcome email</b>.
          </p>
          <p className="text-description text-sm">
            If you don&apos;t find her, <b>check your spam or promotions tab</b>{' '}
            – she sometimes like to hide in there.
          </p>
        </div>
      );
    case ERROR:
      return (
        <>
          <div className='flex w-full flex-col gap-2 px-6 py-8 sm:px-8 sm:py-10'>
            <p className="font-brand text-lg">Hey hey, slow down</p>
            <p className="text-description text-sm">
              Seems like you tried a little bit too hard:{' '}
              <b>you&apos;ve just submitted</b> another email address.
            </p>
            <p className="text-description text-sm">
              Go and <b>check your email</b>, you might already have our welcome
              message in there.
            </p>
            <p className="text-description text-sm">
              Otherwise, <b>wait a minute and try again</b>.
            </p>
          </div>
        </>
      );
    default:
      return (

        <form onSubmit={handleSubmit} className="w-full">
          <div className='flex flex-col gap-8 px-6 py-8 sm:px-8 sm:py-10'>
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="Name"
                required
                className="w-full"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Surname"
                required
                className="w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button isLoading={formState === SUBMITTING} type="submit">
              {formState === SUBMITTING ? 'Wait a sec' : 'Subscribe for free'}
            </Button>
          </div>
        </form>

      );
  }
}

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}
