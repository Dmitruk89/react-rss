export interface Notification {
  id?: number;
  title?: string;
  description?: string;
  backgroundColor?: string;
}

export const toastList = [
  {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
  },
  {
    id: 2,
    title: 'Danger',
    description: 'This is an error toast component',
    backgroundColor: '#d9534f',
  },
];
