import { Button } from "@/components/ui/Button";
import { ButtonProps } from "@/types/gathering/my-card";

interface MyCardActionProps {
  action: ButtonProps;
}

const MyCardAction = ({ action }: MyCardActionProps) => {
  return (
    <Button
      variant={action.variant}
      className="h-10 w-[120px]"
      onClick={action.onClick}
    >
      {action.label}
    </Button>
  );
};

export default MyCardAction;
