export type IWidth = {
  width: number;
};

export type IInput = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

export type ITask = {
  text: string;
};

export type IIconButton = {
  type: any;
};
