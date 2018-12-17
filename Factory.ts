

class Interviewer {
    askQuestion (): string {
        return 'asks questions'
    }
}

class Developer extends Interviewer {
    askQuestion (): string {
        return 'Asking about design patterns'
    }
}

class CommunityExecutive extends Interviewer {
    askQuestion () : string {
        return 'Asking about community building'
    }
}