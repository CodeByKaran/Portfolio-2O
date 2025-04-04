import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { isOnce } from "@/constants";


export default function CategoryFilter({
    categories,
    activeCategory,
    setActiveCategory,
  }: {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: isOnce }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </motion.div>
    );
  }