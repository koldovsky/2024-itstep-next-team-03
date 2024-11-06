import CheckoutInput from "@/app/components/input/checkout-input";
import Button from "@/app/components/button/button";

export default function OrderPromoCode() {
  return (
    <div className="flex flex-col p-5 gap-2 h-fit items-start">
      <p className="text-xs">Enter promo code:</p>
      <div className="flex flex-row gap-4 h-[42px]">
        <CheckoutInput
          params={{
            type: "text",
            placeholder: "Promo code",
            className: "h-full",
          }}
        />
        <Button
          params={{
            content: "Ok",
            url: "/shop/checkout/",
            className: "h-full mt-1 checkout-btn",
          }}
        />
      </div>
    </div>
  );
}
