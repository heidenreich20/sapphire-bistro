import { useState } from 'react';
import Calendar from 'react-calendar';
import '../Calendar.css';
import { Toaster, toast } from 'sonner'
import { format } from 'date-fns';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Reservations = () => {
  const [value, onChange] = useState<Value>(new Date())
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formattedDate = value instanceof Date ? format(value, "EEEE, MMMM dd, hh:mm") : '';
    toast.success(`Dear Mr./Ms ${form.first_name.value} ${form.last_name.value}, your reservation is confirmed for ${formattedDate}`)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber: string = e.target.value;
    const formattedPhoneNumber: string = inputPhoneNumber
      .replace(/\D/g, '')
      .replace(/(\d{1,3})(\d{0,3})(\d{0,3})/, (_, first, middle, last) => {
        let formatted = '';

        if (first) {
          formatted += first;
        }

        if (middle) {
          formatted += `-${middle}`;
        }

        if (last) {
          formatted += `-${last}`;
        }

        return formatted;
      });

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div id='reservations' className="form-control my-10 md:w-4/6 m-auto">
      <Toaster richColors />
      <h2 className='mb-5 text-center font-heading text-3xl font-bold text-secondary'>Make your reservation</h2>
      <form className='flex flex-col bg-alt w-fit m-auto' onSubmit={handleSubmit}>
        <ul className='flex flex-col p-5 gap-5'>
          <li className='flex gap-6'>
            <div>
              <input required type="text" name='first_name' placeholder="e.g. Jane" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                <span className="label-text-alt">First Name</span>
              </label>
            </div>
            <div>
              <input required type="text" name='last_name' placeholder="e.g. Doe" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                <span className="label-text-alt">Last Name</span>
              </label>
            </div>
          </li>
          <li className='flex justify-between items-center h-fit'>
            <label className='w-32' htmlFor="email">Email</label>
            <input id='email' name='email' type="email" placeholder="e.g. janedoe@gmail.com" className="input input-bordered w-full" />
          </li>
          <li className='flex justify-between w-full items-center h-fit'>
            <label className='w-32' htmlFor="phone">Phone</label>
            <div className='flex w-full'>
              <select aria-label='area code' required name='area_code' className="select rounded-r-none select-bordered">
                <option>+54</option>
                <option>+54</option>
                <option>+54</option>
                <option>+54</option>
              </select>
              <input required name='phone' id='phone' type="tel" value={phoneNumber}
                onChange={handlePhoneNumberChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="e.g. 123-456-789" className="input rounded-l-none border-l-0 input-bordered w-full" />
            </div>
          </li>
          <li className='flex justify-between items-center h-fit'>
            <label className='w-32' htmlFor="guest">Number of guests</label>
            <input name='guest' id='guest' type="number" placeholder="e.g. 1" className="input input-bordered w-1/2" />
          </li>
          <li className='m-auto mt-5'>
            <Calendar onChange={onChange} value={value} />
          </li>
        </ul>
        <button aria-label='submit' type='submit' className='py-3 px-5 my-6 border border-neutral hover:border-secondary mx-auto bg-base-100 w-fit hover:text-secondary transition-colors duration-150 ease-linear'>Make reservation</button>
      </form>
    </div>
  )
}

export default Reservations