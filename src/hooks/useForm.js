export default function useForm(prev, set) {
  const onChange = (e) => {
    set({
      ...prev,
      [e.target.name]: e.target.value,
    });
  };

  return {
    onChange,
  };
}
