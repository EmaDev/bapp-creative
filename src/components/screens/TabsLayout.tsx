"use client"

import { motion } from "framer-motion";
import { Tab, Tabs } from '@nextui-org/react'
import React, { useState } from 'react'
import Image from "next/image";

export const TabsLayout = () => {

    const [selected, setSelected] = useState<any>("photos");

    const renderTitle = (title:string):string => {
        /*if( screen && screen.width < 768)*/ return title.slice(0, 8) + "..";
        //return title;
    }

    return (
        <aside className='w-full px-4 lg:px-2 py-8 font-Poppins'>
            <h2 className='text-center text-3xl md:text-5xl font-bold'>For growing teams and organizations</h2>
            <p className='text-center mt-6 max-w-[700px] m-auto'>A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</p>

            <div className="lg:w-4/5 m-auto mt-12 flex flex-col justify-center overflow-hidden">
                <Tabs
                    aria-label="Options"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    className='m-auto'
                    size="sm"
                >
                    <Tab key="photos" title={renderTitle("Community Management")} className=''>
                        <TabContain>

                        </TabContain>
                    </Tab>
                    <Tab key="music" title={renderTitle("Community Management")}>
                        <TabContain>

                        </TabContain>
                    </Tab>
                    <Tab key="videos" title={renderTitle("Community Management")}>
                        <TabContain>

                        </TabContain>
                    </Tab>
                </Tabs>
            </div>
        </aside>
    )
}


const TabContain = ({ chidren }: any) => {
    return (
        <section className='m-auto lg:grid grid-cols-2 gap-12 items-center my-8'>

            <div className='relative w-full flex items-center justify-center'>
                <div className='overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 w-full md:overflow-visible md:px-0'>
                    <div className='relative bg-gray-100 before:absolute before:inset-0 
                    before:scale-x-110 before:border-y before:border-grey-200 after:absolute 
                    after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 
                    dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700'>
                        <div aria-hidden="true" className="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60">
                            <div className="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                            <div className="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"></div>
                        </div>
                        <div className='relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20'>

                            <motion.div
                                initial={{ opacity: 0.0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className='m-auto w-full h-full items-center justify-center'
                            >
                                <Image
                                    width={500} height={500}
                                    src={require("../../assets/images/portrait_black.png")}
                                    alt=""
                                    className="m-auto w-64 bg-white rounded-xl" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-full'>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className='m-auto w-full h-full'
                >
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make work flow across teams while connecting back to company goals</h3>
                        <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                </div>
                                <div className="w-[calc(100%-7.5rem)]">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together as one</h4>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium nemo perspiciatis delectus atque autem!</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                    <img className="m-auto h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/584/584796.png" alt="icon illustration" loading="lazy" width="512" height="512" />
                                </div>
                                <div className="w-[calc(100%-7.5rem)]">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New ideas</h4>
                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus atque autem accusantium nemo perspiciatis delectus atque autem!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}