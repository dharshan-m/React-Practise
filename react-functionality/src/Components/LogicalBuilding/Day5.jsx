import { useState } from 'react';

export default function Day5() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState({ name: '', email: '' });
  const [success, setSuccess] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const clickSubmit = () => {
    let hasError = false;

    if (!name.trim()) {
      setCheckName(true);
      hasError = true;
    } else {
      setCheckName(false);
    }

    if (!email.trim()) {
      setCheckEmail(true);
      hasError = true;
    } else {
      setCheckEmail(false);
    }

    if (!hasError) {
      setSubmit({ name, email });
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const clickReset = () => {
    setName('');
    setEmail('');
    setSubmit({ name: '', email: '' });
    setSuccess(false);
    setCheckName(false);
    setCheckEmail(false);
  };

  return (
    <div className="p-4 space-y-2">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1"
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-1"
      />
      <div className="space-x-2">
        <button onClick={clickSubmit} className="bg-blue-500 text-white px-3 py-1">Submit</button>
        <button onClick={clickReset} className="bg-gray-500 text-white px-3 py-1">Reset</button>
      </div>

      {success && <p className="text-green-600">Successfully Submitted</p>}
      {checkName && <p className="text-red-600">Name is required</p>}
      {checkEmail && <p className="text-red-600">Email is required</p>}

      <div>
        <p><strong>Name:</strong> {submit.name}</p>
        <p><strong>Email:</strong> {submit.email}</p>
      </div>
    </div>
  );
}
