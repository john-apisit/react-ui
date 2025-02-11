import { useContext } from "react";
import ButtonDefault from "./components/buttons/ButtonDefault";
import ModalConfirmContext from "./stores/ModalConfirmContext";
import ButtonCopy from "./components/buttons/ButtonCopy";
import ButtonLink from "./components/buttons/ButtonLink";
import InputSearch from "./components/inputs/InputSearch";
import InputToggle from "./components/inputs/InputToggle";

const Home = () => {
  const confirm = useContext(ModalConfirmContext);

  return (
    <div>
      <InputToggle
        onChange={(value) => {
          console.log("🚀 Toggle value:", value);
        }}
      />
      <InputSearch
        onChange={(text) => {
          console.log("🚀 Search text:", text);
        }}
      />
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
