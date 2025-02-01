"use client";
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export const Label: React.FC<{ className: string }> = ({
  className,
  ...props
}) => {
  return <LabelPrimitive.Root className={cn(className)} {...props}></LabelPrimitive.Root>;
};

export const SlotExample = ({...props})=>{
  const id = React.useId();
  return <Slot id={`${id}-slot-id`} {...props}></Slot>
}
