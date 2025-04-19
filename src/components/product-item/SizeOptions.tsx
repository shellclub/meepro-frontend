import React, { useEffect, useMemo, useState } from 'react'

interface SizeOptionsProps {
    categories: string[];
    subCategory: string;
}

interface SizeOption {
    value: string;
    tooltip: string;
}

const SizeOptions: React.FC<SizeOptionsProps> = ({ categories, subCategory }) => {
    const [options, setOptions] = useState<SizeOption[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const Categories: Record<string, Record<string, SizeOption[]>> = useMemo(() => ({
        clothes: {
            "men's wear": [
                { value: 'S', tooltip: 'Small' },
                { value: 'M', tooltip: 'Medium' },
                { value: 'L', tooltip: 'Large' },
                { value: 'XL', tooltip: 'Extra Large' },
            ],
            "women's wear": [
                { value: 'S', tooltip: 'Small' },
                { value: 'M', tooltip: 'Medium' },
                { value: 'L', tooltip: 'Large' },
                { value: 'XL', tooltip: 'Extra Large' },
            ],
            "baby wear": [
                { value: 'S', tooltip: 'Small' },
                { value: 'M', tooltip: 'Medium' },
                { value: 'L', tooltip: 'Large' },
                { value: 'XL', tooltip: 'Extra Large' },
            ],
            "winter wear": [
                { value: 'S', tooltip: 'Small' },
                { value: 'M', tooltip: 'Medium' },
                { value: 'L', tooltip: 'Large' },
                { value: 'XL', tooltip: 'Extra Large' },
            ],
            "unisex": [
                { value: 'S', tooltip: 'Small' },
                { value: 'M', tooltip: 'Medium' },
                { value: 'L', tooltip: 'Large' },
                { value: 'XL', tooltip: 'Extra Large' },
            ],
            "Fashion": [
                { value: 'S', tooltip: 'Small' },
                { value: 'M', tooltip: 'Medium' },
                { value: 'L', tooltip: 'Large' },
                { value: 'XL', tooltip: 'Extra Large' },
            ],
        },
        footwear: {
            "Sports": [
                { value: '6', tooltip: 'Small' },
                { value: '8', tooltip: 'Medium' },
                { value: '10', tooltip: 'Large' },
                { value: '12', tooltip: 'Extra Large' },
            ],
            "party wear": [
                { value: '6', tooltip: 'Small' },
                { value: '8', tooltip: 'Medium' },
                { value: '10', tooltip: 'Large' },
                { value: '12', tooltip: 'Extra Large' },
            ],
            "Casual": [
                { value: '6', tooltip: 'Small' },
                { value: '8', tooltip: 'Medium' },
                { value: '10', tooltip: 'Large' },
                { value: '12', tooltip: 'Extra Large' },
            ],
            "Baby shoes": [
                { value: '6', tooltip: 'Small' },
                { value: '8', tooltip: 'Medium' },
                { value: '10', tooltip: 'Large' },
                { value: '12', tooltip: 'Extra Large' },
            ],
            "Unisex": [
                { value: '6', tooltip: 'Small' },
                { value: '8', tooltip: 'Medium' },
                { value: '10', tooltip: 'Large' },
                { value: '12', tooltip: 'Extra Large' },
            ],
        },
        vegetables: {
            "Vegetables": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],
            "Tuber root": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],
            "Potato": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],
            "Eggs": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],
            "Dried Fruits": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],
            "Fresh Fruit": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ], "Foods": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ], "Snacks": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ], "chips & fries": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ], "Mix Snack": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],
            "Cookies": [
                { value: '250g', tooltip: 'Small' },
                { value: '500g', tooltip: 'Medium' },
                { value: '1kg', tooltip: 'Large' },
                { value: '2kg', tooltip: 'Extra Large' }
            ],

        },
        accessorise: {
            "Belt": [
                { value: '1 Pcs', tooltip: 'Small' },
                { value: '2 Pcs', tooltip: 'Medium' },
                { value: '3 Pcs', tooltip: 'Large' },
                { value: '4 Pcs', tooltip: 'Extra Large' }
            ],
            "wallet": [
                { value: '1 Pcs', tooltip: 'Small' },
                { value: '2 Pcs', tooltip: 'Medium' },
                { value: '3 Pcs', tooltip: 'Large' },
                { value: '4 Pcs', tooltip: 'Extra Large' }
            ],
            "perfume": [
                { value: '1 Pack', tooltip: 'Small' },
                { value: '2 Pack', tooltip: 'Medium' },
                { value: '3 Pack', tooltip: 'Large' },
                { value: '4 Pack', tooltip: 'Extra Large' }
            ],
            "shampoo": [
                { value: '1 Pack', tooltip: 'Small' },
                { value: '2 Pack', tooltip: 'Medium' },
                { value: '3 Pack', tooltip: 'Large' },
                { value: '4 Pack', tooltip: 'Extra Large' }
            ],
            "Body Lotion": [
                { value: '1 Pack', tooltip: 'Small' },
                { value: '2 Pack', tooltip: 'Medium' },
                { value: '3 Pack', tooltip: 'Large' },
                { value: '4 Pack', tooltip: 'Extra Large' }
            ],
            "jewellery": [
                { value: '1 Pcs', tooltip: 'Small' },
                { value: '2 Pcs', tooltip: 'Medium' },
                { value: '3 Pcs', tooltip: 'Large' },
                { value: '4 Pcs', tooltip: 'Extra Large' }
            ],
            "Lipstick": [
                { value: '1 Pcs', tooltip: 'Small' },
                { value: '2 Pcs', tooltip: 'Medium' },
                { value: '3 Pcs', tooltip: 'Large' },
                { value: '4 Pcs', tooltip: 'Extra Large' }
            ],
            "makeup kit": [
                { value: '1 Pack', tooltip: 'Small' },
                { value: '2 Pack', tooltip: 'Medium' },
                { value: '3 Pack', tooltip: 'Large' },
                { value: '4 Pack', tooltip: 'Extra Large' }
            ],
        }
    }), [])

    useEffect(() => {
        const allOptions: SizeOption[] = [];
        categories.forEach((category: string) => {
            const subCategoryOptions = Categories[category]?.[subCategory];
            if (subCategoryOptions) {
                allOptions.push(...subCategoryOptions);
            }
        });

        setOptions(allOptions);
    }, [categories, subCategory, Categories]);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            <ul className="gi-opt-size">
                {options.map((data: any, index) => (
                    <li key={index} onClick={() => handleClick(index)} className={activeIndex === index ? "active" : ""}>
                        <a className="gi-opt-sz" data-tooltip={data.tooltip}>
                            {data.value}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SizeOptions
