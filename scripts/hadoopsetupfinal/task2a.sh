flintrock run-command --master-only databass_cluster \
	"python pearson.py &&\
	exit 1
	"