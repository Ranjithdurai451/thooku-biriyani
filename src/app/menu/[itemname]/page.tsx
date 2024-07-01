import React from 'react';

const page = ({ params }: { params: { itemname: string } }) => {
  return <div>{params.itemname}</div>;
};

export default page;
