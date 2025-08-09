import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { Award, Frown } from "lucide-react";

interface GameOverDialogProps {
    status: 'won' | 'lost' | 'idle' | 'playing';
    score: number;
    onRestart: () => void;
    open: boolean;
}

export default function GameOverDialog({ status, score, onRestart, open }: GameOverDialogProps) {
    if (status !== 'won' && status !== 'lost') {
        return null;
    }

    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex flex-col items-center justify-center gap-4 text-3xl font-bold">
                        {status === 'won' ? (
                            <>
                                <Award className="h-16 w-16 text-yellow-500" /> You Won!
                            </>
                        ) : (
                            <>
                                <Frown className="h-16 w-16 text-destructive" /> Time's Up!
                            </>
                        )}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-lg py-4">
                        {status === 'won'
                            ? `Congratulations! You cleared the board. Your final score is ${score}.`
                            : "You ran out of time. Better luck next time!"}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={onRestart} className="w-full text-lg py-6">Play Again</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
