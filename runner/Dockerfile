FROM python:3.11-slim

WORKDIR /app

# Cài đặt các gói cần thiết để giới hạn tài nguyên
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir fastapi==0.104.1 uvicorn[standard]==0.24.0

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5001"]
