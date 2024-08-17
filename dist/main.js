(()=>{"use strict";class t{constructor(t){this.length=t,this.numOfHits=0,this.isSunk=!1,this.positions=[]}setPositions(t){this.positions=t}hit(){this.numOfHits+=1,this.checkIsSunk()}checkIsSunk(){this.numOfHits>=this.length&&(this.isSunk=!0)}getIsSunk(){return this.isSunk}}class i{constructor(){this.size=10,this.board=this.createBoard(this.size),this.numOfShips=5,this.numOfSunken=0,this.ships=[]}createBoard(t){const i=[];for(let e=0;e<t;e++)i[e]=new Array(t).fill(null);return i}placeShip(t,i,e,n){const s=t.length,o=[];for(let t=0;t<s;t++)if("right"===n){if(null!==this.board[i][e+t])throw new Error(`Collision detected at (${i}, ${e+t}). Ship cannot be placed.`);o.push([i,e+t])}else if("down"===n){if(null!==this.board[i+t][e])throw new Error(`Collision detected at (${i+t}, ${e}). Ship cannot be placed.`);o.push([i+t,e])}for(let o=0;o<s;o++)"right"===n?this.board[i][e+o]=t:"down"===n&&(this.board[i+o][e]=t);t.setPositions(o),this.ships.push(t)}receiveAttack(i,e){const n=this.board[i][e];null===n?this.board[i][e]="R":n instanceof t&&(n.hit(),this.board[i][e]="H",n.getIsSunk()&&this.incrementSunken())}incrementSunken(){if(this.numOfSunken++,this.numOfSunken>=this.numOfShips)return"Game Over! All ships have been sunk."}isGameover(){return this.numOfSunken>=this.numOfShips}logBoard(){console.log("Gameboard:");for(let t of this.board)console.log(t.map((t=>null===t?".":"S")).join(" "))}logBoardTable(){console.table(this.board.map((i=>i.map((i=>"H"===i?"H":"R"===i?"R":i instanceof t?"S":".")))))}}class e{constructor(t){"computer"===t?this.initCompter():"human"===t&&this.initPlayer()}initPlayer(){this.gameboard=new i}initCompter(){this.gameboard=new i,[5,4,3,3,2].forEach((i=>{let e=!1;for(;!e;){const n=Math.floor(Math.random()*this.gameboard.size),s=Math.floor(Math.random()*this.gameboard.size),o=Math.random()<.5?"right":"down",a=new t(i);try{this.gameboard.placeShip(a,n,s,o),e=!0}catch(t){}}}))}}!function(){let i=new e("human");new e("computer"),i.gameboard.placeShip(new t(5),2,2,"right"),i.gameboard.placeShip(new t(4),5,4,"down"),i.gameboard.placeShip(new t(3),8,7,"right"),i.gameboard.placeShip(new t(3),0,0,"down"),i.gameboard.placeShip(new t(2),6,6,"down"),i.gameboard.logBoardTable()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUFBTUEsRUFDVCxXQUFBQyxDQUFZQyxHQUNSQyxLQUFLRCxPQUFTQSxFQUNkQyxLQUFLQyxVQUFZLEVBQ2pCRCxLQUFLRSxRQUFTLEVBQ2RGLEtBQUtHLFVBQVksRUFDckIsQ0FHQSxZQUFBQyxDQUFhRCxHQUNUSCxLQUFLRyxVQUFZQSxDQUNyQixDQUVBLEdBQUFFLEdBQ0lMLEtBQUtDLFdBQWEsRUFDbEJELEtBQUtNLGFBQ1QsQ0FFQSxXQUFBQSxHQUNPTixLQUFLQyxXQUFhRCxLQUFLRCxTQUN0QkMsS0FBS0UsUUFBUyxFQUV0QixDQUVBLFNBQUFLLEdBQ0ksT0FBT1AsS0FBS0UsTUFDaEIsRUN4QkcsTUFBTU0sRUFDVCxXQUFBVixHQUNJRSxLQUFLUyxLQUFPLEdBQ1pULEtBQUtVLE1BQVFWLEtBQUtXLFlBQVlYLEtBQUtTLE1BQ25DVCxLQUFLWSxXQUFhLEVBQ2xCWixLQUFLYSxZQUFjLEVBQ25CYixLQUFLYyxNQUFRLEVBQ2pCLENBRUEsV0FBQUgsQ0FBWUYsR0FDUixNQUFNQyxFQUFRLEdBQ2QsSUFBSSxJQUFJSyxFQUFJLEVBQUdBLEVBQUlOLEVBQU1NLElBQ3JCTCxFQUFNSyxHQUFLLElBQUlDLE1BQU1QLEdBQU1RLEtBQUssTUFFcEMsT0FBT1AsQ0FDWCxDQUVBLFNBQUFRLENBQVVDLEVBQU1DLEVBQUVDLEVBQUdDLEdBQ2pCLE1BQU1DLEVBQWFKLEVBQUtwQixPQUNsQkksRUFBWSxHQUdsQixJQUFLLElBQUlZLEVBQUksRUFBR0EsRUFBSVEsRUFBWVIsSUFDNUIsR0FBa0IsVUFBZE8sRUFBdUIsQ0FDdkIsR0FBNkIsT0FBekJ0QixLQUFLVSxNQUFNVSxHQUFHQyxFQUFJTixHQUNsQixNQUFNLElBQUlTLE1BQU0sMEJBQTBCSixNQUFNQyxFQUFJTiw4QkFFeERaLEVBQVVzQixLQUFLLENBQUNMLEVBQUdDLEVBQUlOLEdBQzNCLE1BQU8sR0FBa0IsU0FBZE8sRUFBc0IsQ0FDN0IsR0FBNkIsT0FBekJ0QixLQUFLVSxNQUFNVSxFQUFJTCxHQUFHTSxHQUNsQixNQUFNLElBQUlHLE1BQU0sMEJBQTBCSixFQUFJTCxNQUFNTSw4QkFFeERsQixFQUFVc0IsS0FBSyxDQUFDTCxFQUFJTCxFQUFHTSxHQUMzQixDQUdKLElBQUksSUFBSU4sRUFBSSxFQUFHQSxFQUFJUSxFQUFZUixJQUNULFVBQWRPLEVBQ0F0QixLQUFLVSxNQUFNVSxHQUFHQyxFQUFJTixHQUFLSSxFQUNGLFNBQWRHLElBQ1B0QixLQUFLVSxNQUFNVSxFQUFJTCxHQUFHTSxHQUFLRixHQUsvQkEsRUFBS2YsYUFBYUQsR0FFbEJILEtBQUtjLE1BQU1XLEtBQUtOLEVBQ3BCLENBR0EsYUFBQU8sQ0FBY04sRUFBRUMsR0FDWixNQUFNTSxFQUFPM0IsS0FBS1UsTUFBTVUsR0FBR0MsR0FDZCxPQUFUTSxFQUNBM0IsS0FBS1UsTUFBTVUsR0FBR0MsR0FBSyxJQUNaTSxhQUFnQjlCLElBQ3ZCOEIsRUFBS3RCLE1BQ0xMLEtBQUtVLE1BQU1VLEdBQUdDLEdBQUssSUFFZk0sRUFBS3BCLGFBQ0xQLEtBQUs0QixrQkFHakIsQ0FFQSxlQUFBQSxHQUVJLEdBREE1QixLQUFLYSxjQUNEYixLQUFLYSxhQUFlYixLQUFLWSxXQUN6QixNQUFPLHNDQUdmLENBRUEsVUFBQWlCLEdBQ0ksT0FBTzdCLEtBQUthLGFBQWViLEtBQUtZLFVBQ3BDLENBR0EsUUFBQWtCLEdBQ0lDLFFBQVFDLElBQUksY0FDWixJQUFLLElBQUlDLEtBQU9qQyxLQUFLVSxNQUNqQnFCLFFBQVFDLElBQUlDLEVBQUlDLEtBQUlQLEdBQWlCLE9BQVRBLEVBQWdCLElBQU0sTUFBS1EsS0FBSyxLQUVwRSxDQUVBLGFBQUFDLEdBQ0lMLFFBQVFNLE1BQU1yQyxLQUFLVSxNQUFNd0IsS0FBSUQsR0FDekJBLEVBQUlDLEtBQUlQLEdBQ1MsTUFBVEEsRUFBcUIsSUFDWixNQUFUQSxFQUFxQixJQUNyQkEsYUFBZ0I5QixFQUFhLElBQzFCLFFBR25CLEVDN0ZHLE1BQU15QyxFQUNULFdBQUF4QyxDQUFZeUMsR0FDSSxhQUFUQSxFQUNDdkMsS0FBS3dDLGNBQ1csVUFBVEQsR0FDUHZDLEtBQUt5QyxZQUViLENBRUEsVUFBQUEsR0FDSXpDLEtBQUswQyxVQUFZLElBQUlsQyxDQUd6QixDQUVBLFdBQUFnQyxHQUNJeEMsS0FBSzBDLFVBQVksSUFBSWxDLEVBRUQsQ0FBQyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBQ3JCbUMsU0FBUTVDLElBQ2hCLElBQUk2QyxHQUFTLEVBRWIsTUFBUUEsR0FBUSxDQUNaLE1BQU14QixFQUFJeUIsS0FBS0MsTUFBTUQsS0FBS0UsU0FBVy9DLEtBQUswQyxVQUFVakMsTUFDOUNZLEVBQUl3QixLQUFLQyxNQUFNRCxLQUFLRSxTQUFXL0MsS0FBSzBDLFVBQVVqQyxNQUM5Q2EsRUFBWXVCLEtBQUtFLFNBQVcsR0FBTSxRQUFVLE9BRTVDNUIsRUFBTyxJQUFJdEIsRUFBS0UsR0FHdEIsSUFDSUMsS0FBSzBDLFVBQVV4QixVQUFVQyxFQUFNQyxFQUFHQyxFQUFHQyxHQUNyQ3NCLEdBQVMsQ0FDYixDQUFFLE1BQU9JLEdBRVQsQ0FDSixJQUVSLEdDckNHLFdBQ0gsSUFBSUMsRUFBUyxJQUFJWCxFQUFPLFNBQ1QsSUFBSUEsRUFBTyxZQUcxQlcsRUFBT1AsVUFBVXhCLFVBQVUsSUFBSXJCLEVBQUssR0FBSSxFQUFFLEVBQUcsU0FDN0NvRCxFQUFPUCxVQUFVeEIsVUFBVSxJQUFJckIsRUFBSyxHQUFJLEVBQUUsRUFBRyxRQUM3Q29ELEVBQU9QLFVBQVV4QixVQUFVLElBQUlyQixFQUFLLEdBQUksRUFBRSxFQUFHLFNBQzdDb0QsRUFBT1AsVUFBVXhCLFVBQVUsSUFBSXJCLEVBQUssR0FBSSxFQUFFLEVBQUcsUUFDN0NvRCxFQUFPUCxVQUFVeEIsVUFBVSxJQUFJckIsRUFBSyxHQUFJLEVBQUUsRUFBRyxRQUU3Q29ELEVBQU9QLFVBQVVOLGVBQ3JCLENDYkFjLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kcml2ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMgPSAwO1xuICAgICAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtdOyAvLyBBcnJheSB0byBzdG9yZSBwb3NpdGlvbnMgb2NjdXBpZWQgYnkgdGhlIHNoaXBcbiAgICB9XG5cbiAgICAvLyBBZGQgYSBtZXRob2QgdG8gc2V0IHBvc2l0aW9ucyB3aGVuIHRoZSBzaGlwIGlzIHBsYWNlZFxuICAgIHNldFBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMubnVtT2ZIaXRzICs9IDE7XG4gICAgICAgIHRoaXMuY2hlY2tJc1N1bmsoKTtcbiAgICB9XG5cbiAgICBjaGVja0lzU3Vuaygpe1xuICAgICAgICBpZih0aGlzLm51bU9mSGl0cyA+PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmlzU3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJc1N1bmsoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTdW5rO1xuICAgIH1cblxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDEwO1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCh0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLm51bU9mU2hpcHMgPSA1O1xuICAgICAgICB0aGlzLm51bU9mU3Vua2VuID0gMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdOyBcbiAgICB9XG5cbiAgICBjcmVhdGVCb2FyZChzaXplKXtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTsgLy8gQ3JlYXRlIGEgbG9jYWwgdmFyaWFibGUgYGJvYXJkYFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKXtcbiAgICAgICAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KHNpemUpLmZpbGwobnVsbCk7IC8vIEluaXRpYWxpemUgZWFjaCByb3cgb2YgdGhlIGJvYXJkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkOyAvLyBSZXR1cm4gdGhlIGxvY2FsIHZhcmlhYmxlIGBib2FyZGBcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgeCx5LCBkaXJlY3Rpb24pe1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdOyAvLyBBcnJheSB0byB0cmFjayBwb3NpdGlvbnMgZm9yIHRoaXMgc2hpcFxuXG4gICAgICAgIC8vIEZpcnN0LCBjaGVjayBpZiB0aGUgc2hpcCBjYW4gYmUgcGxhY2VkIHdpdGhvdXQgY29sbGlzaW9uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSArIGldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29sbGlzaW9uIGRldGVjdGVkIGF0ICgke3h9LCAke3kgKyBpfSkuIFNoaXAgY2Fubm90IGJlIHBsYWNlZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goW3gsIHkgKyBpXSk7IC8vIFRyYWNrIHBvc2l0aW9uXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeCArIGldW3ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29sbGlzaW9uIGRldGVjdGVkIGF0ICgke3ggKyBpfSwgJHt5fSkuIFNoaXAgY2Fubm90IGJlIHBsYWNlZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goW3ggKyBpLCB5XSk7IC8vIFRyYWNrIHBvc2l0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7IC8vIFBsYWNlIHRoZSBzaGlwIGhvcml6b250YWxseVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gc2hpcDsgLy8gUGxhY2UgdGhlIHNoaXAgdmVydGljYWxseVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHNoaXAncyBwb3NpdGlvbnMgaW4gdGhlIFNoaXAgb2JqZWN0XG4gICAgICAgIHNoaXAuc2V0UG9zaXRpb25zKHBvc2l0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cblxuICAgIC8vUmV2ZWFsIGNvb3JkaW5hdGU6IHBsYWNlIFwiUmV2ZWFsZWQgZm9yIHRoZSBjb29yZGluYXRlcyB0aGF0IHdhcyBjbGlja2VkIGJ1dCBkaWQgbm90IGhpdFwiXG4gICAgcmVjZWl2ZUF0dGFjayh4LHkpey8vdGFrZSBjb29yZGluYXRlcyBpblxuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKGNlbGwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnUic7IC8vICdSJyBmb3IgUmV2ZWFsZWRcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgICAgY2VsbC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnSCc7IC8vICdIJyBmb3IgSGl0XG5cbiAgICAgICAgICAgIGlmIChjZWxsLmdldElzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRTdW5rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluY3JlbWVudFN1bmtlbigpe1xuICAgICAgICB0aGlzLm51bU9mU3Vua2VuKys7XG4gICAgICAgIGlmICh0aGlzLm51bU9mU3Vua2VuID49IHRoaXMubnVtT2ZTaGlwcykge1xuICAgICAgICAgICAgcmV0dXJuICdHYW1lIE92ZXIhIEFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuay4nO1xuICAgICAgICAgICAgLy8gVE9ETzogT3B0aW9uYWxseSByZXNldCB0aGUgZ2FtZSBoZXJlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0dhbWVvdmVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm51bU9mU3Vua2VuID49IHRoaXMubnVtT2ZTaGlwcztcbiAgICB9XG5cbiAgICAvL2RlYnVnIGZ1bmN0aW9uXG4gICAgbG9nQm9hcmQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lYm9hcmQ6Jyk7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmJvYXJkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cubWFwKGNlbGwgPT4gY2VsbCA9PT0gbnVsbCA/ICcuJyA6ICdTJykuam9pbignICcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ0JvYXJkVGFibGUoKSB7XG4gICAgICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZC5tYXAocm93ID0+IFxuICAgICAgICAgICAgcm93Lm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCA9PT0gJ0gnKSByZXR1cm4gJ0gnOyAvLyBIaXRcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCA9PT0gJ1InKSByZXR1cm4gJ1InOyAvLyBSZXZlYWxlZFxuICAgICAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcCkgcmV0dXJuICdTJzsgLy8gU2hpcFxuICAgICAgICAgICAgICAgIHJldHVybiAnLic7IC8vIEVtcHR5IGNlbGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IodHlwZSl7XG4gICAgICAgIGlmKHR5cGUgPT09IFwiY29tcHV0ZXJcIil7XG4gICAgICAgICAgICB0aGlzLmluaXRDb21wdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJodW1hblwiKXtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBsYXllcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFBsYXllcigpe1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07IFxuICAgICAgICAvL1RPRE86aW1wbGVtZW50IFxuICAgIH1cblxuICAgIGluaXRDb21wdGVyKCl7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdOyBcbiAgICAgICAgc2hpcExlbmd0aHMuZm9yRWFjaChsZW5ndGggPT4ge1xuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmdhbWVib2FyZC5zaXplKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5nYW1lYm9hcmQuc2l6ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdyaWdodCcgOiAnZG93bic7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gcGxhY2UgdGhlIHNoaXA7IGlmIGl0IGZhaWxzLCBjYXRjaCB0aGUgZXJyb3IgYW5kIHJldHJ5XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7IC8vIElmIHRoZSBzaGlwIGlzIHN1Y2Nlc3NmdWxseSBwbGFjZWQsIGV4aXQgdGhlIGxvb3BcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIChlLmcuLCBjb2xsaXNpb24pLCBjb250aW51ZSB0aGUgbG9vcCB0byB0cnkgYWdhaW5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWUoKXtcbiAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcihcImh1bWFuXCIpO1xuICAgIGxldCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJjb21wdXRlclwiKTtcblxuICAgIC8vcG9wdWxhdGUgcGxheWVy4oCZcyBHYW1lYm9hcmQgd2l0aCBwcmVkZXRlcm1pbmVkIGNvb3JkaW5hdGVzLlxuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDUpLCAyLDIsICdyaWdodCcpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDQpLCA1LDQsICdkb3duJyk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoMyksIDgsNywgJ3JpZ2h0Jyk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoMyksIDAsMCwgJ2Rvd24nKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCgyKSwgNiw2LCAnZG93bicpO1xuXG4gICAgcGxheWVyLmdhbWVib2FyZC5sb2dCb2FyZFRhYmxlKCk7XG59XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9kcml2ZXJcIjtcblxuZ2FtZSgpOyJdLCJuYW1lcyI6WyJTaGlwIiwiY29uc3RydWN0b3IiLCJsZW5ndGgiLCJ0aGlzIiwibnVtT2ZIaXRzIiwiaXNTdW5rIiwicG9zaXRpb25zIiwic2V0UG9zaXRpb25zIiwiaGl0IiwiY2hlY2tJc1N1bmsiLCJnZXRJc1N1bmsiLCJHYW1lYm9hcmQiLCJzaXplIiwiYm9hcmQiLCJjcmVhdGVCb2FyZCIsIm51bU9mU2hpcHMiLCJudW1PZlN1bmtlbiIsInNoaXBzIiwiaSIsIkFycmF5IiwiZmlsbCIsInBsYWNlU2hpcCIsInNoaXAiLCJ4IiwieSIsImRpcmVjdGlvbiIsInNoaXBMZW5ndGgiLCJFcnJvciIsInB1c2giLCJyZWNlaXZlQXR0YWNrIiwiY2VsbCIsImluY3JlbWVudFN1bmtlbiIsImlzR2FtZW92ZXIiLCJsb2dCb2FyZCIsImNvbnNvbGUiLCJsb2ciLCJyb3ciLCJtYXAiLCJqb2luIiwibG9nQm9hcmRUYWJsZSIsInRhYmxlIiwiUGxheWVyIiwidHlwZSIsImluaXRDb21wdGVyIiwiaW5pdFBsYXllciIsImdhbWVib2FyZCIsImZvckVhY2giLCJwbGFjZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlcnJvciIsInBsYXllciIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9