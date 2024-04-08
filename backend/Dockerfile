FROM python:3.11-slim

# Allows for log messages to be immediately dumped to the stream instead of being buffered
ENV PYTHONBUFFERED True

ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

ENV PORT 5001


# Install necessary Python packages
RUN pip3 install --no-cache-dir -r requirements.txt

ENTRYPOINT ["sh", "start.sh"]
