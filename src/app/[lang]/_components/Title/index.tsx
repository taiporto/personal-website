import React, { JSX } from "react";

export const Title = ({
  Tag,
  size,
  weight = 'extrabold',
  children,
}: {
  Tag: keyof JSX.IntrinsicElements;
  size?: string;
  weight?: string;
  children: React.ReactNode;
}) => {
  return(
    <div className="bg-gradient-to-r from-purple-900 to-purple-800 bg-clip-text text-transparent">
    <Tag className={`text-${size} font-${weight} font-roboto-slab`}>
      {children}
    </Tag>
    </div>
  )
}