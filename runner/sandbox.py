# Sandbox environment for executing code
import time
import resource

class Sandbox:
    def __init__(self, timeout, memory_limit):
        self.timeout = timeout
        self.memory_limit = memory_limit

    def run(self, func, *args):
        # Set memory limits
        resource.setrlimit(resource.RLIMIT_AS, (self.memory_limit, self.memory_limit))
        # Set timeout
        signal.signal(signal.SIGALRM, self.handler)
        signal.alarm(self.timeout)
        try:
            return func(*args)
        except Exception as e:
            return str(e)
        finally:
            signal.alarm(0)

    def handler(self, signum, frame):
        raise TimeoutError("Execution exceeded time limit")
