type CheckoutTextareaProps = {
  params: {
    labelName: string;
    className?: string;
  };
};

export default function CheckoutTextarea({ params }: CheckoutTextareaProps) {
  return (
    <div className={`${params.className} flex flex-col gap-1 w-full`}>
      <label className="text-[var(--input-label-clr)] text-xs">
        {params.labelName}
      </label>
      <textarea className="border outline-none text-xs text-[var(--input-text-clr)] border-[var(--input-clr)] focus:border-[var(--input-focus-clr)] px-2 py-3 w-full" />
    </div>
  );
}
