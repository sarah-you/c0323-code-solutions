import { FaCircle, FaRegCircle } from 'react-icons/fa';
import Image from './Image';

export default function ProgressBar({ img, count, onClick }) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push(<Image key={i} text={i} onClick={() => onClick(i)} />);
  }
  return (
    <div>
      <FaCircle />
      <FaRegCircle />
      <FaRegCircle />
      <FaRegCircle />
      <FaRegCircle />
    </div>
  );
}
