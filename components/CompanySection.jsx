'use client'

import { desVariants, tagVariants, titleVariants } from "@/utils/animation"
import Badge from "./Badge"
import { motion } from "framer-motion"

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols01 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {/* Badge 1 */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-white leading-7">
                        Transaction Every 24 Hours
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        <Badge 
                        endCountNum={44}
                        endCountText= ' Million'
                        />
                    </dd>
                </motion.div>

                {/* Badge 2 */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-white leading-7">
                        Asset Under Running
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        <Badge 
                        endCountNum={119}
                        endCountText= ' Tillion'
                        />
                    </dd>
                </motion.div>

                {/* Badge 3 */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-white leading-7">
                        New Users Annualy
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        <Badge 
                        endCountNum={2500}
                        endCountText= ' +'
                        />
                    </dd>
                </motion.div>
            </dl>
        </div>
    </div>
  )
}

export default CompanySection