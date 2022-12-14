import React, { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { HandlerContext } from "../../contexts/handlerContext";
import { deleteItem } from "../../services/api";
import { Wrapper, Panel, Description, ButtonWrapper } from "./styles";
import { callToast } from "../../utils";

export default function DeleteDialog() {
  const { isOpen, setIsOpen } = useContext(HandlerContext);
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper open={isOpen} onClose={() => setIsOpen(false)}>
      <Panel>
        <Description>Are you sure you want to delete it?</Description>
        <Buttons loading={loading} setLoading={setLoading} />
      </Panel>
    </Wrapper>
  );
}

function Buttons({ loading, setLoading }) {
  const { setIsOpen, itemId, method, refresh, setRefresh, userData } =
    useContext(HandlerContext);

  async function handleDelete(categorie, id) {
    setLoading(true);
    try {
      await deleteItem(categorie, id, userData);
      setTimeout(() => {
        setLoading(false);
        callToast("success", "Item deleted");
        setIsOpen(false);
        setRefresh(!refresh);
      }, 1000);
    } catch (err) {
      callToast("error", err?.response?.data?.error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <ButtonWrapper>
        <button type="submit" className="cancel">
          No, go back
        </button>
        <button type="submit" className="confirm">
          <ThreeDots color="#FFFFFF" height={17} width="100%" />
        </button>
      </ButtonWrapper>
    );
  }
  return (
    <ButtonWrapper>
      <button type="submit" className="cancel" onClick={() => setIsOpen(false)}>
        No, go back
      </button>
      <button
        type="submit"
        className="confirm"
        onClick={() => {
          handleDelete(method, itemId);
        }}
      >
        Yes, delete it
      </button>
    </ButtonWrapper>
  );
}
