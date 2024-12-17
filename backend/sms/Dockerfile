FROM eclipse-temurin:17-jdk-alpine AS build

WORKDIR /app

COPY ./mvnw /app/mvnw
COPY .mvn /app/.mvn
COPY ./pom.xml /app/pom.xml

RUN chmod +x /app/mvnw

COPY ./src /app/src

RUN ./mvnw clean install -DskipTests

FROM eclipse-temurin:17-jre-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser
WORKDIR /app

COPY --from=build /app/target/sms-0.0.1-SNAPSHOT.jar /app/my-app.jar

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=10s --start-period=10s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/actuator/health || exit 1

LABEL maintainer="chahidhadifi@gmail.com" version="1.0" description="Spring Boot application container"

CMD ["java", "-jar", "my-app.jar"]
