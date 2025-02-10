import { useContext } from "react";
import ButtonDefault from "./components/buttons/ButtonDefault";
import ModalConfirmContext from "./stores/ModalConfirmContext";

const Home = () => {
  const confirm = useContext(ModalConfirmContext);

  return (
    <div>
      <ButtonDefault
        color="primary"
        onClick={() =>
          confirm.show({
            title: "Confirm Message!",
            message: "Are you sure to delete this item?",
            size: "sm",
            onYes: async () => {
              console.log("User say Yes");
            },
          })
        }
      >
        Open Modal
      </ButtonDefault>
    </div>
  );
};

export default Home;
