'use client';

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client"
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface CategoriesProps {
  data: Category[];
}

export const Categories = ({
  data
}: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get('categoryId');

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = queryString.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return (
    <div className="w-full overflow-x-auto p-3 flex space-x-2">
      <button
        onClick={() => onClick(undefined)}
        className={cn(`
          py-2
          px-2
          md:py-3
          md:px-4
          rounded-md
          text-xs
          md:text-sm
          hover:opacity-75
        `, !categoryId ? 'bg-primary/25' : 'bg-primary/10')}
      >
        Newest
      </button>
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={cn(`
            py-2
            px-2
            md:py-3
            md:px-4
            rounded-md
            text-xs
            md:text-sm
            hover:opacity-75
          `, categoryId === item.id ? 'bg-primary/25' : 'bg-primary/10')}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}