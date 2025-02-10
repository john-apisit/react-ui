import { useContext } from "react";
import ButtonDefault from "./components/buttons/ButtonDefault";
import ModalConfirmContext from "./stores/ModalConfirmContext";
import ButtonCopy from "./components/buttons/ButtonCopy";
import ButtonLink from "./components/buttons/ButtonLink";

const Home = () => {
  const confirm = useContext(ModalConfirmContext);

  return (
    <div className="px-10 py-10">
      <ButtonLink color="primary-modern-border" to="/products">
        Go to products
      </ButtonLink>
      <ButtonCopy text="1234" />
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
