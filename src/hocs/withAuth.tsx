import { ComponentType } from "react";
import { Link } from "react-router";

export const withAuth = <T,>(Component: ComponentType<T>, token?: string) => {
  return (props: T) => {
    return (
      <>
        {token ? (
          <Component {...(props as any)} />
        ) : (
          <div>
            Please login <Link to="/login">Login</Link>
          </div>
        )}
      </>
    );
  };
};
