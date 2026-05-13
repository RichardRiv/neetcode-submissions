class TrieNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        
        for(let ch of word){
            if(!curr.children.has(ch)) curr.children.set(ch, new TrieNode());
            curr = curr.children.get(ch); 
        }

        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, idx, curr){
        if(idx === word.length) return curr.endOfWord;

        let ch = word[idx];
        if(ch === '.'){
            for(let child of curr.children.values()){
                if(this.dfs(word, idx+1, child)) return true;
            }
            return false;
        }else{
            if(!curr.children.has(ch)) return false;
            return this.dfs(word, idx+1, curr.children.get(ch));
        }
    }
}

