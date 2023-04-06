import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Ad:
        <input {...register("ad", { required: true })} />
        {errors.ad && <p>Lütfen adınızı girin.</p>}
      </label>

      <label>
        E-posta:
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email?.type === "required" && (
          <p>düzgün e-poçt adresi daxil edin.</p>
        )}
        {errors.email?.type === "pattern" && (
          <p>düzgün e-poçt adresi daxil edin.</p>
        )}
      </label>

      <label>
        Telefon:
        <input
          {...register("telefon", {
            required: true,
            pattern: /^[0-9\b]+$/i,
            minLength: 10,
            maxLength: 10,
          })}
        />
        {errors.telefon?.type === "required" && (
          <p>Düzgün telefon nömrəsi yazmalısız.</p>
        )}
        {errors.telefon?.type === "pattern" && (
          <p>Sadəcə rəgəmlərədən istifadə edin.</p>
        )}
        {errors.telefon?.type === "minLength" && (
          <p>telefon nömrəniz ən az 10rəgəmli olmalıdır.</p>
        )}
        {errors.telefon?.type === "maxLength" && (
          <p>telefon nömrəniz ən çox 10rəgəmli olmalıdır.</p>
        )}
      </label>

      <button type="submit">Göndər</button>
    </form>
  );
}

export default App;
