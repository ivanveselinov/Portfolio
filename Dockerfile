FROM node:26.12.0

# Set working directory
WORKDIR /portfolio

# Copy portfolio code
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Allow OpenShift's random non-root user to write required cache files
RUN chgrp -R 0 /portfolio \
    && chmod -R g=u /portfolio

# Make React listen on all network interfaces
ENV HOST=0.0.0.0

# Expose the port CRA uses
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

# Run locally
# docker run -d \
#   --name portfolio \
#   -p 3000:3000 \
#   portfolio

# Openshift deployment
# oc new-app https://github.com/ivanveselinov/Portfolio --strategy=docker --name=portfolio
