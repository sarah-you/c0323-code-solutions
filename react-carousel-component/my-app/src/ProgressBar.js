import { FaCircle, FaRegCircle } from 'react-icons/fa';
import Image from './Image';

export default function ProgressBar({ img, count, onClick, current }) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push(<FaRegCircle key={i} onClick={() => onClick(i)} />);
  }
  return <div>{circles}</div>;
}
