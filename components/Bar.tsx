import {FunctionComponent} from "react";
import {InterfaceSkill} from "../services/types";
import {motion} from "framer-motion";

const Bar: FunctionComponent<{
    data: InterfaceSkill
}> = ({data: {name, level}}) => {

    const bar_width = `${level}`

    const variants = {
        initial: {
            width: 0
        },
        animate: {
            width: bar_width,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    }

    return (
        <>
            <p className="dark:text-gray-300">{name}</p>
            <div className="overflow-hidden h-1.5 mb-2 text-xs flex rounded bg-gray-200">
                <motion.div style={{width: bar_width}}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${parseInt(level) >= 50 ? 'bg-green-600' : 'bg-yellow-600'} `}>
                </motion.div>
            </div>
        </>
    )
}

export default Bar
