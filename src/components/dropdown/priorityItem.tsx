import { useEffect, useState } from "react";

interface PriorityItemProps {
  priority: string;
}

const PriorityItem = ({ priority }: PriorityItemProps) => {
  const [priorityColor, setPriorityColor] = useState("");
  const [priorityText, setPriorityText] = useState("");

  const getPriorityProps = (priority: string) => {
    switch (priority) {
      case "LOW":
        setPriorityColor("bg-turquoise text-cadmium-green");
        setPriorityText("Baixa Prioridade");
        break;
      case "MEDIUM":
        setPriorityColor("bg-flavescent text-philippine-bronze");
        setPriorityText("Média Prioridade");
        break;
      case "HIGH":
        setPriorityColor("bg-light-salmon text-philippine-bronze");
        setPriorityText("Alta Prioridade");
        break;
      case "VERY_HIGH":
        setPriorityColor("bg-congo-pink text-blood");
        setPriorityText("Altíssima Prioridade");
        break;
    }
  };

  useEffect(() => {
    getPriorityProps(priority);
  }, [priority]);

  return (
    <p
      className={`${priorityColor} font-semibold rounded-md px-4 py-1 gap-2.5`}
    >
      {priorityText}
    </p>
  );
};

export default PriorityItem;
