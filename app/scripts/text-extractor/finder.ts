import { TextExtractor } from './extractor'
import { NopTextExtractor } from './nop';

export class TextExtractorFinder {
    private constructor() {}
    
    static find(aResponse: Response): TextExtractor | null {
        return null;
    }
}