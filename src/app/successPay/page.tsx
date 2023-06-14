"use client";
import { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "@/utils/helper";
import { Button } from "@/components/ui/button";

const Success = () => {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <div>
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            shopeonline@example.com
          </a>
        </p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
