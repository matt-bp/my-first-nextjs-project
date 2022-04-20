import { FC } from "react"
import MuiButton from "@mui/material/Button"

interface MyButtonProps {
    /**
     * Very important text
     */
    label: string;
    /**
     * A variant
     */
    variant: 'contained' | 'outlined';
}

export const MyButton: FC<MyButtonProps> = ({label, variant}) => {
    return <MuiButton variant={variant}>{label}</MuiButton>
}