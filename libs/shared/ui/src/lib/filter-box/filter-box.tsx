import { Fragment, useState } from 'react';
import styles from './filter-box.module.css';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

/* eslint-disable-next-line */
export interface FilterBoxProps {}

export function FilterBox(props: FilterBoxProps) {
  const [selected, setSelected] = useState(people[3]);

  return (
    <div>
      <div className="md:rounded-full md:flex md:shadow ">
        <div className="w-full !md:mb-2">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full md:rounded-none md:rounded-l-full rounded-full border-none py-2 pl-3 border-r-1 shadow-sm sm:text-xs text-[8px]"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex mt-2 md:mt-0 gap-2 md:gap-0 justify-center">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-sm  text-[8px]  sm:text-xs  md:rounded-none  rounded-full">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  text-base shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {person.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                )}
                              >
                                {/* <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                /> */}
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </Listbox>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left text-[8px]  shadow-sm sm:text-xs  md:rounded-none  rounded-full">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {person.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                )}
                              >
                                {/* <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                /> */}
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </Listbox>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-xs text-[8px]  md:rounded-r-full  md:rounded-none  rounded-full">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="h-3 w-3 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg  md:rounded-none  rounded-full sm:text-xs">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {person.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                )}
                              >
                                {/* <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                /> */}
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </Listbox>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
