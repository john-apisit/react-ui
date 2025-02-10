export type FormMode = "add" | "edit" | "view";

export type ModalOption = {
  canSpaceClick?: boolean;
  size?: Size;
};

export type Size = "sm" | "md" | "lg" | "full";

export const modalSizeClass = {
  sm: "w-10/12 md:w-5/12 lg:w-4/12",
  md: "w-10/12 md:w-7/12 lg:w-6/12",
  lg: "w-10/12 md:w-9/12 lg:w-9/12",
  full: "w-11/12 md:w-11/12 lg:w-11/12",
};

export type OnCloseFn<TResult = void> = (
  isComplete: boolean,
  data?: TResult
) => Promise<void>;

export type FormModalOptions<TData = void, TResult = void> = {
  mode: FormMode;
  initData?: TData;
  onClose?: OnCloseFn<TResult>;
};

export type OnYesFn<TResult> = (data?: TResult) => Promise<void>;

export type YesNoModalOptions = FormModalOptions<any, any> & {
  onYes: OnYesFn<any>;
  titleMessage?: string;
  confirmMessage: string;
};

export const getTitle = (title: string, mode: FormMode) => {
  return mode === "add"
    ? `Add new ${title}`
    : mode === "edit"
    ? `Edit ${title}`
    : title;
};
