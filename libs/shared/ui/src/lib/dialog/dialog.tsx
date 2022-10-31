import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';

interface DialogProps {
  onClose: (val: boolean) => void;
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  size?: 'md' | 'lg' | 'extra';
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const DialogBox = ({
  onClose,
  open,
  title,
  children,
  size = 'md',
}: DialogProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => onClose(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  size === 'md' ? 'max-w-lg' : '',
                  size === 'lg' ? 'max-w-xl' : '',
                  size === 'extra' ? 'max-w-4xl' : '',
                  'relative bg-white rounded-lg text-left rounded-md shadow-xl transform transition-all sm:my-8  w-full h-full'
                )}
              >
                <div className="bg-white relative px-2 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-md">
                  <div className="absolute w-full bottom-[-15px] left-0">
                    <div
                      onClick={() => onClose(false)}
                      className="w-[40px] h-[40px]  mx-auto rounded-lg bg-[#FD2928] flex items-center justify-center"
                    >
                      <XIcon className="flex-shrink-0  w-5 h-5  text-white" />
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-3 text-center sm:mt-0  sm:text-left">
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogBox;
