import { CreateGoal } from "./assets/components/create-goal";
import { Summary } from "./assets/components/summary";
// import { EmptyGoals } from "./assets/components/empty-goals";
import { Dialog } from "./assets/components/ui/dialog";

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  );
}
