import Container from "@/components/ui/Container";

export default function layout({ children }) {
    return (
        <div className="">
            <Container className=" h-screen">
                {children}
            </Container>
        </div>
    )
}