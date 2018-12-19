interface Interviewer {
    askQuestion (): string
}

class Developer implements Interviewer {
    askQuestion (): string {
        return 'Asking about design patterns'
    }
}

class CommunityExecutive implements Interviewer {
    askQuestion () : string {
        return 'Asking about community building'
    }
}

abstract class HiringManager {
    protected abstract makeInterviewer() : Interviewer
    takeInterview(): string {
        const interviewer = this.makeInterviewer()
        return interviewer.askQuestion()
    }
}

class DevelopmentManager extends HiringManager {
    protected makeInterviewer() : Interviewer {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    protected makeInterviewer() : Interviewer {
        return new CommunityExecutive()
    }
}

// implementation
const devManager = new DevelopmentManager()
console.log(devManager.takeInterview())

const marketingManager = new MarketingManager()
console.log(marketingManager.takeInterview())