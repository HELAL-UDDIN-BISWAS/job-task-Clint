import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Badge,
    Button,
    Card, } from "keep-react";
    import { ShoppingCart } from "phosphor-react";

const AllTask = () => {
    const {data:datas=[]}=useQuery({
        queryKey:[],
        queryFn:async()=>{
         const res=await axios.get('https://jobs-task-server.vercel.app/jobtask')
         return res.data
        }
        
    })
    console.log(datas)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 my-2'>
            {
                datas.map(data=><div key={data._id}>
                     <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={data.image_url}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge size="xs" colorType="light" color="gray">
                Tine 
              </Badge>
              <Card.Title>{data.due_date}</Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <Card.Title>{data.task_name}</Card.Title>
              <Card.Description>
              T{data.description}
              </Card.Description>
              <h3>priority: {data.priority}</h3>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
              <Button size="sm" type="outlineGray">
                <span className="pr-2">
                  <ShoppingCart size={24} />
                </span>
                Add To Cart
              </Button>
            </Card.Container>
          </Card.Container>
        </Card>
                </div>)
            }
        </div>
    );
};

export default AllTask;