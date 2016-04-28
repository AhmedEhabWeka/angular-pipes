import { SqrtPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('SqrtPipe', () => {
    
    let pipe: SqrtPipe;
    
    beforeEach(() => {
       pipe = new SqrtPipe(); 
    });
    
    it('Should return 2', () => {
        
        expect(pipe.transform(4)).toEqual(2);
    });
    
    it('Should return 9', () => {
       
        expect(pipe.transform(81)).toEqual(9)); 
    });
  
});