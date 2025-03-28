#include <stdio.h>

int main() {
    int m,n,r;
    printf("Enter the size of frame 1: -\n");
    scanf("%d", &m);
    printf("Enter the size of frame 2: -\n");
    scanf("%d", &n);
    printf("Enter the size of parity: -\n");
    scanf("%d", &r);
    
    if (r >= m || r >= n) {
        printf("This bit stuffing is not possible. Parity size exceeded frame size.\n");
        return 0;
    }
    
    int fr1[m], fr2[n], par[r];
    
    printf("Enter the elements of frame 1: -\n");
    for (int i =0; i<m; i++){
        printf("Enter the %d element: ", i+1);
        scanf("%d", &fr1[i]);
    }
    
    printf("Enter the elements of frame 2: -\n");
    for (int i =0; i<n; i++){
        printf("Enter the %d element: ", i+1);
        scanf("%d", &fr2[i]);
    }
    
    printf("Enter the elements of parity: -\n");
    for (int i =0; i<r; i++){
        printf("Enter the %d element: ", i+1);
        scanf("%d", &par[i]);
    }
    
    /*
        m = sizeof(fr1)/ sizeof(fr1[0]);
        n = sizeof(fr2)/ sizeof(fr2[0]);
        r = sizeof(par)/ sizeof(par[0]);
    */
    
    int resfr[m+n+r];
    for (int i =0; i<m+n+r; i++){
        if (i < m){
            resfr[i] = fr1[i];
        }
        else if (i < m + r){
            resfr[i] = par[i - m];
        }
        else {
            resfr[i] = fr2[i - (m + r)];
        }
    }
    
    printf("Resultant frame: -\n");
    for (int i =0; i<m+n+r; i++){
        printf("%d ", resfr[i]);
    }
    
    return 0;
}