import { Fragment, useEffect, useState } from 'react';
import styles from './filter-box.module.css';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

/* eslint-disable-next-line */
export interface FilterBoxProps {
  listData: any;
  FetchFitler: (v: any) => void;
}

export function FilterBox({ FetchFitler, listData }: FilterBoxProps) {
  const router = useRouter();
  const [typeList, setTypeList] = useState({
    q: '',
    type: '',
    rarity: '',
    subtype: '',
  });

  useEffect(() => {
    const query = router.query;
    if (query) {
      setTypeList({ ...typeList, ...query });
    }
  }, [router.pathname]);

  const handleChange = (name: string, v: string) => {
    const object = { ...typeList, [name]: v.toLocaleLowerCase() };
    const newQUery = new URLSearchParams(object).toString();
    setTypeList(object);
    FetchFitler(object);
    router.push(
      {
        pathname: router.pathname,
        search: newQUery,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <div className="md:rounded-full md:flex md:shadow ">
        <div className="w-full !md:mb-2">
          <input
            type="email"
            value={typeList.q}
            onChange={(e) => {
              handleChange('q', e.target.value);
            }}
            name="email"
            id="email"
            className="block w-full md:rounded-none md:rounded-l-full rounded-full border-none py-2 pl-3 border-r-1 shadow-sm sm:text-xs text-[8px]"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex mt-2 md:mt-0 gap-2 md:gap-0 justify-center">
          <Listbox
            value={typeList.type}
            onChange={(v) => {
              handleChange('type', v);
            }}
          >
            {({ open }) => (
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-sm  text-[8px]  sm:text-xs  md:rounded-none  rounded-full">
                  {typeList.type ? (
                    <span className="block truncate text-gray-500">
                      {typeList.type}
                    </span>
                  ) : (
                    <span className="block truncate text-gray-500">type</span>
                  )}
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
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 min-w-[150px] w-full overflow-auto rounded-md bg-white py-1  text-base shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                    {listData?.typeList?.map((item: string) => (
                      <Listbox.Option
                        key={item}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {item}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </Listbox>
          <Listbox
            value={typeList.rarity}
            onChange={(v) => {
              handleChange('rarity', v);
            }}
          >
            {({ open }) => (
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left text-[8px]  shadow-sm sm:text-xs  md:rounded-none  rounded-full">
                  {typeList.rarity ? (
                    <span className="block truncate text-gray-500">
                      {typeList.rarity}
                    </span>
                  ) : (
                    <span className="block truncate text-gray-500">rarity</span>
                  )}
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
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60  min-w-[150px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
                    {listData?.rarityList?.map((item: string) => (
                      <Listbox.Option
                        key={item}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {item}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            )}
          </Listbox>
          <Listbox
            value={typeList.subtype}
            onChange={(v) => {
              handleChange('subtype', v);
            }}
          >
            {({ open }) => (
              <div className="relative ">
                <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-sm  sm:text-xs text-[8px]  md:rounded-r-full  md:rounded-none  rounded-full">
                  {typeList.subtype ? (
                    <span className="block truncate text-gray-500">
                      {typeList.subtype}
                    </span>
                  ) : (
                    <span className="block truncate text-gray-500">sub</span>
                  )}

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
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60  min-w-[150px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg  md:rounded-none  rounded-full sm:text-xs">
                    {listData?.subTypeList?.map((item: string) => (
                      <Listbox.Option
                        key={item}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'text-white bg-indigo-600'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-8 pr-4'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {item}
                          </span>
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
