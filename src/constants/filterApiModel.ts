import { FilterOptions } from "@/types";


export const filters = {
  filterByCategory:[
    {
       label:"Brand",
       value:"by-brand",
       relatedOptions:[
        {
          label:,
          value:,
          inStock:,
        }
      ]

    }
  ],
  filterByColor:[
    {
      label:"Colors",
      value:"by-colors",
      relatedOptions:[
        {
          label:,
          value:,
          inStock,
        },
        


      ]

    },

  ],
  filterByPrice:[
    {
      label:"Price",
      value:"by-price",
      relatedOptions:[
        {
          label:,
          value:,
          inStock:
        }
      ]
    }
  ],
  filterByAvailability:[
    {
      label:"Availability",
          value:"by-avl",
      relatedOptions:[
        {
          label:,
          value:,
          inStock:,


        },
      ]
    },
  ],
  filterByMaterials:[
    {
      label:"Material",
      value:"by-material",

      relatedOptions:[
      {  label:,
        value:,
        inStock:,
      },
      ]

    }
  ]
}