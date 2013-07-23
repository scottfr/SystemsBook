set.seed(3)

n <- 10;
x <- rnorm(10, mean=10, sd=0);
data <- data.frame(start=rnorm(n, x, 1), mid=rnorm(n, 3*x, 9), end=rnorm(n, 4.5*x, 1))

plot(c(0, 3, 12), c(10, 10*3, 10*4.5), type="l", lwd=3, xlab="Month", ylab="Hamster Size");

for(i in 1:nrow(data)){
	lines(c(0,3,12), data[i,], col="grey", lwd=2, lty=2)
}

print(summary(lm(mid~start+0, data)))
print(summary(lm(end~mid+0, data)))

print(summary(lm(end~start+0, data)))
