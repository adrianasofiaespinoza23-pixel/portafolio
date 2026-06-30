import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0b] flex flex-col items-center justify-center select-none"
        >
          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sans font-light text-sm uppercase tracking-[0.35em] text-neutral-500 mb-10"
          >
            Adriana Espinoza
          </motion.p>

          {/* Progress bar */}
          <div className="w-40 h-px bg-neutral-800 overflow-hidden rounded-full">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="h-full bg-gradient-to-r from-[#af9675] to-[#c2a781] rounded-full"
            />
          </div>

          {/* Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[10px] text-neutral-600 mt-5 tracking-widest"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 1, 1] }}
              transition={{ duration: 1.4, delay: 0.15, times: [0, 0.1, 0.5, 0.9, 1] }}
            >
              Loading
            </motion.span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
